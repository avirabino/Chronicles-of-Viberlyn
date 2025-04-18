# --- Windsurf Metadata ---
# Assistant: Core
# Created: 2025-04-18
# Modified: 2025-04-18
# --- End Windsurf Metadata ---

def test_health_endpoint():
    from fastapi.testclient import TestClient
    from backend.app.main import app
    client = TestClient(app)
    response = client.get("/health")
    assert response.status_code == 200
