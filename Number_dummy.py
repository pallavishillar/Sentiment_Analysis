from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.post('/api/names')
def get_names():
    names = [
        {"name": "50", "type": "Positive"},
        {"name": "40", "type": "Neutral"},
        {"name": "10", "type": "Negative"}
    ]
    return names

if __name__ == "__main__":
    uvicorn.run(app, host='127.0.0.1', port=5000)
