from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import base64
import os
import time

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials = True,
    allow_methods=['*'],
    allow_headers=['*'],
)

def image_to_base64(image_path):
    with open(image_path, 'rb')as image_file:
        image_data = base64.b64encode(image_file.read()).decode()
    return image_data


@app.get('/get_analysis')
def get_analysis():
    response = {}
    # image_str = image_to_base64('wordcloud/trial1.jpeg')
    image_str = image_to_base64('wordcloud/wi2.jpg')
    result_dict = {
        'positive_counts' : 50,
        'negative_counts' : 40,
        'neutral_counts' : 10,
        'image' : image_str,
        'file_list': ['file1.txt', 'file2.txt', 'file3.txt'],
        'data' : [
            {
                'file1.txt' : '''
                1. Dummy1
                2. Dummy2
                3. Dummy3
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                '''
            },
            {
                'file2.txt' : '''
                1. Dummy1
                2. Dummy2
                3. Dummy3
                4. Rating Score : 3 out of 5
                5.Overall Sentiment : Neutral 
                '''
            },
            {
                'file3.txt' : '''
                1. Dummy1
                2. Dummy2
                3. Dummy3
                4. Rating Score : 1 out of 5
                5.Overall Sentiment : Negative 
                '''
            }
        ]
    }
    
    response['status'] = True
    response['message'] = "Fetched Analysis results"
    response['data'] = result_dict
    
    return response

@app.post('/buffer')
def buffer():
    response = {}
    timer = 2
    time.sleep(timer)
    response['status'] = True
    response['message'] = f'Delayed message after {timer}'
    return response

if __name__=="__main__":
    uvicorn.run(app, host='127.0.0.1', port = 8016)