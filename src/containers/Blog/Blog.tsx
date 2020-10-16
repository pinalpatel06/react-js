import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import { PostIntr } from '../../Interfaces/Post';
import FullPost from '../Blog/FullPost/FullPost';

interface Props {
}

interface State {
    posts: PostIntr[],
    selectedPostId: number | null;
    error: boolean;
}

class Blog extends Component<Props, State> {
    render() {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={{pathname: "/new-post"}}>
                                New Post
                            </NavLink>
                        </li>
                    </ul>
                </header>

                {/* <Route path="/" exact render={() => <Posts />} />
                <Route path="/new-post" render={() => <NewPost />} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />

                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;