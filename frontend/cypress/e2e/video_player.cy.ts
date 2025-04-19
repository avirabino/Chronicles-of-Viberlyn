/// <reference types="cypress" />

// --- Windsurf Metadata ---
// Assistant: QA_Cypress
// Created: 2025-04-19
// Modified: 2025-04-19
// --- End Windsurf Metadata ---

describe('VideoPlayer E2E Test', () => {
  const testPageUrl = '/test-video'; // The page we created
  const storyId = 'chronicles-of-viberlyn'; // Match the storyId used in the page
  const backendApiUrl = `http://localhost:8000/api/video/intro/${storyId}`; // Match API base URL

  beforeEach(() => {
    // Intercept the backend call to ensure we have predictable data
    // and aren't reliant on the backend server running during the test.
    cy.intercept('GET', backendApiUrl, {
      fixture: 'intro-video-sample.json', // Use the fixture file we created
    }).as('getVideoData');

    // Visit the test page
    cy.visit(testPageUrl);

    // Wait for the data to be loaded (or check for loading state removal)
    cy.wait('@getVideoData'); // Wait for the intercepted request to complete
    cy.get('[data-testid="video-player-container"]').should('be.visible');
  });

  it('should load the first frame correctly', () => {
    // Check if the container is visible
    cy.get('[data-testid="video-player-container"]').should('be.visible');

    // Check first frame content (using fixture data)
    cy.fixture('intro-video-sample.json').then((frames) => {
      const firstFrame = frames[0];
      // Basic check for image src containing the filename
      cy.get('[data-testid="video-frame-image"]').should('have.attr', 'src').and('include', firstFrame.imageUrl.split('/').pop()); 
      cy.get('[data-testid="video-frame-title"]').should('contain.text', firstFrame.title);
      cy.get('[data-testid="video-frame-text"]').should('contain.text', firstFrame.text);
      // Check initial frame index text - ensure it matches the expected format
      cy.get('[data-testid="current-frame-index"]').should('contain.text', `Frame 1 / ${frames.length}`); 
    });
  });

  it('should navigate to the next frame when "Next Frame" is clicked', () => {
     cy.fixture('intro-video-sample.json').then((frames) => {
        const secondFrame = frames[1];
        // Wait for the next button to potentially appear (depends on audio logic)
        // Increase timeout if audio needs real time. Using 10s as a buffer.
        cy.get('[data-testid="next-frame-button"]', { timeout: 10000 }).should('be.visible').click();

        // Check second frame content
        cy.get('[data-testid="video-frame-image"]').should('have.attr', 'src').and('include', secondFrame.imageUrl.split('/').pop());
        cy.get('[data-testid="video-frame-title"]').should('contain.text', secondFrame.title);
        cy.get('[data-testid="video-frame-text"]').should('contain.text', secondFrame.text);
        cy.get('[data-testid="current-frame-index"]').should('contain.text', `Frame 2 / ${frames.length}`);
     });
  });

  it('should call onClose when "Skip Intro" is clicked', () => {
    // Stub the window.alert function to verify the callback triggers it
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('[data-testid="skip-intro-button"]').should('be.visible').click();

    // Check that the alert was called (meaning onClose was triggered)
    cy.wrap(alertStub).should('have.been.calledOnceWith', 'Video player closed!');
    // Depending on onClose, the player might disappear. Add checks if needed.
    // cy.get('[data-testid="video-player-container"]').should('not.exist'); 
  });

   it('should display "Finish" on the button for the last frame and call onClose', () => {
     cy.fixture('intro-video-sample.json').then((frames) => {
       // Click 'Next' until the last frame
       for (let i = 0; i < frames.length - 1; i++) {
         cy.get('[data-testid="next-frame-button"]', { timeout: 10000 }).should('be.visible').click();
         // Optional: check frame index if timing is an issue
         cy.get('[data-testid="current-frame-index"]').should('contain.text', `Frame ${i + 2} / ${frames.length}`);
       }

       // Now on the last frame
       const lastFrame = frames[frames.length - 1];
        cy.get('[data-testid="video-frame-image"]').should('have.attr', 'src').and('include', lastFrame.imageUrl.split('/').pop());
        cy.get('[data-testid="video-frame-title"]').should('contain.text', lastFrame.title);
        cy.get('[data-testid="video-frame-text"]').should('contain.text', lastFrame.text);
        cy.get('[data-testid="current-frame-index"]').should('contain.text', `Frame ${frames.length} / ${frames.length}`);

       // Check the button text is 'Finish'
       cy.get('[data-testid="next-frame-button"]').should('contain.text', 'Finish');

       // Stub alert for onClose check
       const alertStub = cy.stub();
       cy.on('window:alert', alertStub);

       // Click 'Finish'
       cy.get('[data-testid="next-frame-button"]').click();

       // Verify onClose was called
       cy.wrap(alertStub).should('have.been.calledOnceWith', 'Video player closed!');
     });
   });

});
