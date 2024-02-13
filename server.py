from flask import Flask, jsonify, request
from flask_cors import CORS
from transformers import pipeline
summarizer = pipeline("summarization", model="Falconsai/text_summarization")

app = Flask(__name__)

CORS(app)

# Get all tasks
@app.route('/api', methods=['GET'])
def get_tasks():
    if summarizer is not None:
        return jsonify({'tasks': summarizer})

@app.route('/api/prediction', methods=['GET'])
def search_books():
    search_query = request.args.get('q')  # Get search query from query parameters
    result = []
    if search_query:
        filtered_books = summarizer(search_query, max_length = 150, min_length = 10, do_sample=False)
        result = filtered_books[0]
        
    else:
        return jsonify({"MSG":"data not found, 404"})
    
    return jsonify({'message':'complete',
                    "hasil":result['summary_text']})
        
    
if __name__ == '__main__':
    app.run(debug=True)