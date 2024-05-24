from fastapi import FastAPI
import uvicorn
import os
import time

app = FastAPI()

@app.post('/buffer')
def buffer():
    response = {}
    timer = 30
    time.sleep(timer)
    response['status'] = True
    response['message'] = f'Delayed message after {timer}'
    return response

if __name__=="__main__":
    uvicorn.run(app, host='127.0.0.1', port = 8016)