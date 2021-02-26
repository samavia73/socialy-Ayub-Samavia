import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './models/post';

//connecter la bdd avec mon formulaire 

const postsList = "https://crudcrud.com/api/172e2e6747b24b109472f74506c1c8b9";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(postsList+"/posts");
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(postsList+"/posts", post);
  }

  deleteOnePost(id: String): Observable<{}> {
    const url = postsList+"/posts/"+id;
    return this.http.delete(url);
  }

  edit(postId: number, postEdited: Post) {
    //NOTE: postEdited ne doit pas avoir de propriété _id, l'api de crudcrud.com ne l'autorise pas avec le PUT
    //NOTE: si besoin de supprimer la propriété => delete postEdited._id
    return this.httpClient.put(https://crudcrud.com/api/${this.token}/postsList/${postId}, postEdited);
  }

}