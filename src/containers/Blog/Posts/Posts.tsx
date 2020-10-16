import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';


import './Posts.css';
import { PostIntr } from '../../../Interfaces/Post';
import Post from '../../../components/Post/Post';

interface Props {
}

interface State {
    posts: PostIntr[],
    selectedPostId: number | null;
    error: boolean;
}

class Posts extends Component<Props, State> {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    constructor(props: Props) {
        super(props);
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
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>);
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;