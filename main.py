from flask import Flask, request, url_for, render_template
import time
import pyaudio
import wave
import requests
import json
import os
import google.generativeai as genai
genai.configure(api_key='AIzaSyDFL54swPkUD1MpCH0ELnND9xwhSrYfRDE')

app=Flask(__name__)



@app.route('/')
def main():
    return render_template('index.html')











if __name__=="__main__":
    app.run(debug=True)
