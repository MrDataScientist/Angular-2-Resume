//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Welcome to my {{name}}</h2>
      <h2> <i> Tarik En Nakdi </i></h2>
      
      <p>
      I am a Data engineer who has passion for <B>Web Development</B> and applied mathematics, I worked for the last 3 years in the development of statistical models and <B>Artificial Intelligence</B> for data mining(Calculate real-time Smart Data and indicators based on the continuous processing of Big Data by some algorithms.). 
 During the last 3 years at school I learned how to Implement algorithms for Data Optimization Such as Markov...etc (Stochastic & Determinist methods). I'm also very interested in <B>social life</B> and the society: Music, Art, Cinema, Weather, News, Science fiction.
      </p>
      
      <h2> <i> {{training}}  </i></h2>
       <p>Udemy - MEAN ´stack Training</p>
       <p>Udemy - Javascript, Data structure </p>
       <p>Udemy - MongooseJS with node.js</p>
       <p>Udemy - iOS, Android and Web Application Training </p>
       <p>Udemy - Design & Export a HTML Web or Sales page in Photoshop CS5 </p>
       <p>Udemy - Learn How To Use A Time Series Forecasting Web App </p>
       <p>Udemy - Foundation classes on JavaScript </p>
       <p>Udemy - Python : boot up skill by solving 10 problems </p>
       <p>Udemy – React JS Basics to Advanced</p>
       <p>Udemy – AngularJS 2</p>
       <p>Udemy – AngularJS - Filters</p>
       <p>Udemy – Swift iOS Image Uploads Using A Node Backend</p>
       <p>Udemy – ExpressJS fundamentals</p>
       <p>Udemy – MongooseJS Essentials – MongoDB for Node.js</p>
       <p>Deutsch Akademie – German A2</p>
       <p>Coursera – Machine Learning</p>
       <p>Udemy - Baseball Data Wrangling with Vagrant, R, and Retrosheet</p>
       <p>Coursera - R Studio, Programming</p>
       <p>Coursera - The Data Scientist’s Toolbox</p>
       <p>Udemy - Big Data with Apache Spark</p>
       <p>Udemy - Big Data Basics: Hadoop, MapReduce, Hive, Pig, & Spark</p>
       <p>e-learning – Node.js E-Commerce and web services</p>
       
       <h2> <i>Here is my phone number : {{number1}}  </i></h2>
    </div>
  `,
})
export class App {
  name:string;
  training:string;
  number1:string;
  detail2:string;
  constructor() {
    this.name = 'Angular2 resume'
    this.training = 'Online training:'
    this.number1 = '(+49) 177-1905906'
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}