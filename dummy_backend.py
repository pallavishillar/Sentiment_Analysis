from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import time

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.post('/buffer')
def buffer():
    response = {}
    timer = 10
    time.sleep(timer)
    response['status'] = True
    response['message'] = f'Delayed message after {timer}'
    return response

if __name__=="__main__":
    uvicorn.run(app, host='127.0.0.1', port = 8016)