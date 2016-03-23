import React from 'react';
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    // const {fields: {title, category, body}, handleSubmit, load, submitting} = this.props;
    // console.log("loadPosts()",loadPosts());
    // this.props.loadPosts();
    console.log("PROPS",this.props);
    // const title = this.props.title
    const { fields: {title, category, body}, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>title</label><br/>
          <input type='text' {...title} />
        </div>
        <div>
          <label>Category</label><br/>
          <input type='text' {...category} />
        </div>
        <div>
          <label>Body</label><br/>
          <textarea {...body} />
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
};

PostForm = reduxForm({
  form: 'post',
  fields: ['title', 'category', 'body']
})(PostForm);

export default PostForm;


// function mapStateToProps(state) {
//   console.log("mapStateToProps > state",state)
//   return {
//     posts: state.get('posts')
//   };
// }

// export default PostForm = connect(
//   {title, category, body},
//   {handleSubmit, clearPosts}
// )(PostForm)

