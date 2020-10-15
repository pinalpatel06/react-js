import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import { PostIntr } from '../../Interfaces/Post';

interface Props {
}

interface State {
    posts: PostIntr[],
    selectedPostId: number | null;
    error: boolean;
}

class Blog extends Component<Props, State> {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response: any) => {
                const posts: any = response.data.slice(0, 4);
                const updatedPosts: any = posts.map((post: any) => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
                // console.log( response );
            })
            .catch((error: any) => {
                // console.log(error);
                this.setState({ error: true });
            });
    }

    postSelectedHandler = (id: number) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts: JSX.Element | JSX.Element[] = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post: any) => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;