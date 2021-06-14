import React from "react";
import bannerSinglePlayerMode from '../banner_darkmode_single_mode.png';
import $ from 'jquery';

class SinglePlayer extends React.Component {
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
  parseString(string) {
      return string.replace(/&#(?:x([\da-f]+)|(\d+));/g, function (_, hex, dec) {
        return String.fromCharCode(dec || +('0x' + hex))
      })
      .replace(/&quot;/g, '\"')
      .replace(/&lt;;/g, '\<')
      .replace(/&gt;/g, '\>')
      .replace(/&le;/g, '\≤')
      .replace(/&ge;/g, '\≥')
      ;
  }


  shuffleAllQuestionsAnswers(incorrects, correct){
    let returnArray = [].concat(incorrects);//copy incorrect array
    returnArray.push(correct);    
    return returnArray.sort(() => Math.random() - 0.5);
  }
  loadQuestionsAPI = async () => {
    //console.log('starting loadQuestionsAPI()');
    fetch(this.state.url).then(response => response.json()).then(data => {
      // console.log('data.results');
      // console.log(data.results );
      data.results.forEach(dataResult => {
          if(!("all_answers" in dataResult)){
            dataResult.all_answers = this.shuffleAllQuestionsAnswers(dataResult.incorrect_answers, dataResult.correct_answer);
            
          }
        }
      );
      this.setState({
        questions: data.results,
        loaded : true,

      });
    });
  }
  loadQuestions = async () => {
    // console.log('starting loadQuestions()');
    fetch(this.state.url).then(response => response.json()).then(data => {
      data.results.forEach(dataResult => {
          if(!("all_answers" in dataResult)){
            dataResult.all_answers = this.shuffleAllQuestionsAnswers(dataResult.incorrect_answers, dataResult.correct_answer);
            
          }
        }
      );
      this.setState({
        questions: data.results,
        loaded : true,

      });
    });
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
  // console.log("before");
  // console.log(this.state.singlePlayerQuestions);
  return (
    <div className="single-player">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-3">
            <div className="row">
                <div id="answers_div">
                <p className = "dashboard-header" > LAST ANSWER </p>
                <p className = "dashboard-value" style={{color: this.state.lastAns}}>
                  {this.state.lastAns == 'black' && '----'}
                  {this.state.lastAns == 'green' && 'CORRECT'}
                  {this.state.lastAns == 'red' && 'WRONG'}</p>
                </div>
              </div>
              <div className="row">
                <div className="dashboard-header" >TOTAL SCORE </div>
              </div>
              <div className="row">
                <div className="dashboard-value score"  >: {this.state.score}</div>
              </div>
              <div className="row">
                <div className="dashboard-header" >CORRECT</div>
              </div>
              <div className="row">
                <div className="dashboard-value correct"  >: {this.state.correctlyAnswered}</div>
              </div>
              <div className="row">
                <div className="dashboard-header" >WRONG</div>
              </div>
              <div className="row">
                <div className="dashboard-value incorrect"  >: {this.state.incorrectlyAnswered}</div>
              </div>
              <div className="row">
            
                <h1 className="font-weight-light">Training for Ranking</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
                
              </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={bannerSinglePlayerMode}
              alt=""
            /></div>
            <div className="row">
              <div id="Start screen"></div>
            </div>
            <div className="row">
              <div id="timer"></div>
            </div>
            <div className="row">
              <hr />
              <div id="question_div" >
              {this.state.loaded &&
                <p className = "question">{this.parseString(this.state.questions[this.state.qInd].question)}</p>
                }
                <hr />
              </div>
            </div>
            <div className="row">
              <div id="choices_div"  >
                {this.state.loaded && this.state.questions[this.state.qInd].all_answers.map((answer, index) => (
                  <div className="row d-grid gap-2 col-6 mx-auto mt-2">
                    <div><button className="btn question-answser"  type="button" key = {index} onClick = {(e) => this.handlePrsdAPI(e, index)}>{this.parseString(answer)}</button></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div id="restart_div" ></div>
            </div>
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

export default SinglePlayer;