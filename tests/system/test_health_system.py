# --- Windsurf Metadata ---
# Assistant: Core
# Created: 2025-04-18
# Modified: 2025-04-18
# --- End Windsurf Metadata ---

import requests

def test_health_system():
    url = "http://localhost:8000/health"
    response = requests.get(url)
    assert response.status_code == 200
