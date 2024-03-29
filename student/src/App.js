import React, { Component } from 'react';
import './App.css';
class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      skills:'',
    }
    this.addItems = this.addItems.bind(this)
  }
  addItems(){
    let skill = this.state.skills.split(',');
    let final_state = this.state;
    console.log("Skills is"+this.state.skills);
    final_state['skills'] = skill;
    if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.skills !== ''){
      console.log(this.state.skills);
      this.props.studentinfo(this.state);
      this.setState({
        firstName:'',
        lastName:'',
        skills:''
      });
    }
  }
  render() {
    return (
      <div className="">
        
        <div className='form'>
        <input type='text' className='fieldset' placeholder='First Name' onChange={(event)=>this.setState({firstName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Last Name'onChange={(event)=>this.setState({lastName:event.target.value})} />
        <input type='text' className='fieldset' placeholder='Skills'onChange={(event)=>this.setState({skills:event.target.value})} /><br></br>
        <button className='btn' onClick={this.addItems}>Submit</button>
        </div >
      </div>
    );
  }
}
class SearchName extends Component{
  render(){
    return(
      <div>
         <input type="text"  className='searchbtn' onChange={(event) => this.props.searchinfo(event.target.value)}  placeholder="Search By Name" ></input>
      </div>
    )}
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students : [
        {
          'firstName': 'Akash',
          'lastName': 'Deep',
          'skills': ['Python','HTML','CSS']
        },
        {
          'firstName': 'Pramod',
          'lastName': 'Roy',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },
        {
          'firstName': 'Abhishek',
          'lastName': 'Singh',
          'skills': ['Python', 'Git', 'CSS']
        }
      ],
      searchname:''
    }
    this.textshow = this.textshow.bind(this)
    this.sortedfirstname= this.sortedfirstname.bind(this)
    this.sortedlastName= this.sortedlastName.bind(this)
    this.searchItem= this.searchItem.bind(this)
    this.sortedskills= this.sortedskills.bind(this)
  }
  textshow(char)
  {
    this.setState({
      students: [...this.state.students,char]
    })
  }
  sortedfirstname(){
    let sortedfirstName= this.state.students.sort(function(a,b){
      let x = a.firstName.toLowerCase();
      let y = b.firstName.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    this.setState(
      {
        students:sortedfirstName
        })
  }
  sortedlastName(){
    let sortedlastName= this.state.students.sort(function(a,b){
     return a.lastName.localeCompare(b.lastName)})
   this.setState({
       students:sortedlastName
       })
  }
 sortedskills(){
  let sortedskills = this.state.students.sort(function(a,b){
      if (a.skills.length > b.skills.length) {
        return -1;
      }
      if (a.skills.length < b.skills.length) {
        return 1;
      }
      return 0;
    });
  this.setState({
    students:sortedskills
    });
  }
 searchItem(text){
  this.setState({
    searchname:text
  })
}
  render() {
    return (
      <div className="App">
        <AddStudent studentinfo={this.textshow} />
        <SearchName searchinfo={this.searchItem}/>
        <table className="table_content">
          <thead className="table-row">
          <tr>
            <th className="table-heading" onClick={this.sorteditems}>Firstname</th>
            <th className="table-heading">Lastname</th>
            <th className="table-heading">Skills</th>
          </tr>
          </thead>
          <tbody>
          {this.state.students.filter(name => {
                  return name.firstName.toLowerCase().includes(this.state.searchname.toLowerCase()) ||
                  name.lastName.toLowerCase().includes(this.state.searchname.toLowerCase());
                })
            .map((item,index)=>(
            <tr key={index} >
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                <ul>
                  {item.skills.map((item,index)=>
                    <ol key={item}>{item}</ol>
                  )
                  }
                  </ul></td>
              </tr>
          ))}
       </tbody>
       </table>
      </div>
    );
  }
}
      
      
//   renderTableData() {
//     return this.state.students.map((item,index)=>{
//       const{firstName,lastName,skills}=item
//       return(
//         <div>
//         {/* <tr>
//           <th>Firstname</th>
//           <th>lastName</th>
//           <th>skills</th>
//         </tr> */}
//         <tr id="table-body" key={item}>
//           <td>{firstName}</td>
//           <td>{lastName}</td>
//           <td>{skills[0]},{skills[1]},{skills[2]}</td>
//         </tr>
//         </div>
//       )
//     })
//   }
//   renderTableHeader() {
//     let header = Object.keys(this.state.students[0])
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }

//   render(){
//     return(
      
//          <table id="stud">
//           <thead>
//             <tr> 
//             <th>firstName</th>
//             <th>lastName</th>
//             <th>skills</th>
//             </tr>
           
//           </thead>
          
//           <tbody >
//           <tr>{this.renderTableData()}</tr>
//         </tbody>

//       </table>
    
     
//     )}}

//       // <div className="studentstyle">
//       //   {this.state.students.map((item,index)=>
//       //   (
//       //     <div key={item}>
//       //       <tr>
//       //         <th><h1>Firstname</h1></th>
//       //         <th><h1>Lastname</h1></th>
//       //         <th><h1>skills</h1></th>
//       //       </tr>
//       //       <h1>{item.firstName}
//       //       </h1>
//       //   <h1>{item.lastName}</h1>
//       //   <h1>{item.skills}</h1>
//       //     </div>
//       //   ))}
        
//       //  </div>  
            
         
      
      
   


export default App;
