import React from "react";
import bannerSinglePlayerMode from '../banner_darkmode_single_mode.png';
import $ from 'jquery';
import bannerHostMode from '../banner_host_sprout_1.png';


class UploadSnippetDiscordOldie extends React.Component {
  constructor(props){//constructor
      super(props);//super class props
      this.state = { //initial state
          timerCountdown: 16,
          singlePlayerQuestions : [ 
            {
              Title : 'What is Canada\'s national animal?',
              CorrectAnswer : 'Beaver',
              IncorrectAnswers : ['Dog', 'Duck', 'Horse'],
            },
            {
              Title : 'What is converted into alcohol during brewing?',
              CorrectAnswer : 'Sugar',
              IncorrectAnswers : ['Grain', 'Dog' , 'Water'],
            },
            {
              Title : 'In what year was Prince Andrew born?',
              CorrectAnswer : '1960',
              IncorrectAnswers : ['1955', '1964', '1970'],
            },
          ],
          currentQuestion : 0,    
          //treevia gameplay variables
          questions: [],
          loaded : false,
          qInd : 0,
          url : "https://opentdb.com/api.php?amount=10&category=18&type=multiple",
          score: 0,
          correctlyAnswered: 0,
          incorrectlyAnswered: 0,
          lastAns: 'black',



      };
  }

  handlePrsd = (e, ans) => {
      e.preventDefault()
      if(this.state.qInd + 1 < this.state.questions.length) {
         this.setState({
          qInd: this.state.qInd + 1,   
         });
       } else {
         this.loadQuestions();
         this.setState({
          qInd: 0,   
         });
       }
   }
    
   handlePrsdAPI = (e, ans) => {
      //  console.log(this.state.questions[this.state.qInd].all_answers[ans]);
      //  console.log("This is : "+ (this.state.questions[this.state.qInd].correct_answer == this.state.questions[this.state.qInd].all_answers[ans]));
       e.preventDefault()

       if(this.state.questions[this.state.qInd].correct_answer == this.state.questions[this.state.qInd].all_answers[ans]) {
          this.setState({
            score: this.state.score + 10,
            correctlyAnswered: this.state.correctlyAnswered + 1,   
            lastAns: 'green',   
          });
       } else {
        this.setState({
          score: this.state.score - 10,
          incorrectlyAnswered: this.state.incorrectlyAnswered + 1,      
          lastAns: 'red',   
        });
       }


       if(this.state.qInd + 1 < this.state.questions.length) {
          this.setState({
           qInd: this.state.qInd + 1,   
          });
        } else {
          this.loadQuestionsAPI();
          this.setState({
           qInd: 0,   
          });
        }
    }
    
 render() {    
  return (
    <div className="upload-snippethost">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={bannerHostMode}
              alt=""
            />
          </div>
          <div className="col-lg-5">
          <h1 className="font-weight-light">Upload a new snippet!</h1>
          <h2 className="font-weight-light">These snippets will be playable through the bot.</h2>
          </div>
          <div className="col-lg-12">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
            <label for="snippet" ><bold>Choose File</bold></label>
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <br></br>
          </div>
          <div className="col-lg-12">
            <form enctype="multipart/form-data">
                <input type = "file" name="file" id="snippet" accept = ".mp3"/>
                <button type="submit"></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }

  componentDidMount() {
    this.loadQuestionsAPI();
  }
} 

export default UploadSnippetDiscordOldie;