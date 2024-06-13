from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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

class requestData(BaseModel):
    folder_name : str
    
@app.post('/fetch_data')
def get_analysis(input_data:requestData):
    response = {}
    foldername = input_data.folder_name
    print(foldername)
    # image_str = image_to_base64('wordcloud/trial1.jpeg')
    image_str = image_to_base64('wordcloud/wi2.jpg')
    result_dict = {
        'positive_counts' : 60,
        'negative_counts' : 10,
        'neutral_counts' : 30,
        'image' : image_str,
        
        'file_list': ['file1.txt', 'file2.txt', 'file3.txt','file4.txt','file5.txt','file6.txt','file7.txt','file8.txt','file9.txt','file10.txt'],
        'data' : {
                'file1.txt' : '''
                1. Dummy1_1
                2. Dummy2_1
                3. Dummy3_1
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file2.txt' : '''
                1. Dummy1_2
                2. Dummy2_2
                3. Dummy3_2
                4. Rating Score : 3 out of 5
                5.Overall Sentiment : Neutral 
                ''',
                'file3.txt' : '''
                1. Dummy1_3
                2. Dummy2_3
                3. Dummy3_3
                4. Rating Score : 1 out of 5
                5.Overall Sentiment : Negative 
                ''',
                'file4.txt' : '''
                1. Dummy1_4
                2. Dummy2_4
                3. Dummy3_4
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file5.txt' : '''
                1. Dummy1_5
                2. Dummy2_5
                3. Dummy3_5
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file6.txt' : '''
                1. Dummy1_6
                2. Dummy2_6
                3. Dummy3_6
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file7.txt' : '''
                1. Dummy1_7
                2. Dummy2_7
                3. Dummy3_7
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file8.txt' : '''
                1. Dummy1_8
                2. Dummy2_8
                3. Dummy3_8
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file9.txt' : '''
                1. Dummy1_9
                2. Dummy2_9
                3. Dummy3_9
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                ''',
                'file10.txt' : '''
                1. Dummy1_10
                2. Dummy2_10
                3. Dummy3_10
                4. Rating Score : 4 out of 5
                5.Overall Sentiment : Positive 
                '''
        }
    }
    
    response['status'] = True
    response['message'] = "Fetched Analysis results"
    response['data'] = result_dict
    
    return response

@app.post('/begin_analysis')
def buffer():
    response = {}
    timer = 2
    time.sleep(timer)
    response['status'] = True
    response['message'] = f'Delayed message after {timer}'
    response['folder_name'] = 'test_data_1'
    return response

if __name__=="__main__":
    uvicorn.run(app, host='0.0.0.0', port = 8000)