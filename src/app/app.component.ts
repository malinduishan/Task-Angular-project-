import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'task-project';

  constructor(private http: HttpClient) {}

  saveData() {
    const fname = (document.getElementById('fname') as HTMLInputElement).value;
    const lname = (document.getElementById('lname') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const formData = {
 
      fname: fname,
      lname: lname,
      email: email,
      password: password
    };

    this.http
      .post<any>('http://localhost:8080/api/v1/user/saveUser', formData)
      .subscribe(
        (response) => {
          console.log('Data saved successfully', response);
          // window.location.reload();
          alert(response)
        },
        (error) => {
          console.error('Error saving data', error);
        }
        
      );
      
  }


  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/v1/user/getUsers').subscribe(
      response => {
        console.log('File uploaded successfully', response);
      },
      error => {
        console.error('Error uploading file', error);
      }
    );
    this.saveData();
  }
}
