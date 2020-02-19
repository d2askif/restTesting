import React from 'react';
import Header from '../src/components/header';
import Headline from '../src/components/headline';
import SharedButton from '../src/components/button';
import ListItem from '../src/components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../src/redux/actions';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    };
    return (
      <div>
        <Header></Header>
        <section className='main'>
          <Headline
            header={'Posts'}
            desc='Culpa veniam fugiat aliqua mollit excepteur. Labore ex do ad commodo pariatur et excepteur ea non esse. Officia veniam esse eiusmod laborum do excepteur commodo enim excepteur. Ut nulla pariatur reprehenderit cillum deserunt sit laborum veniam eiusmod. Incididunt quis mollit id tempor id id do id irure aliquip qui proident et enim. Anim cupidatat consequat officia mollit ad.'
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const itemProps = { title: post.title, desc: post.body };
                return <ListItem key={index.toString} {...itemProps} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(App);
