import { style } from '@vanilla-extract/css';

export const createLetterStyles = {
  postWrapper: style({
    // boxShadow: '0 0 0 5px red inset',
    position: 'relative',
  }),

  image: {
    nonePostImage: style({
      backgroundColor: 'gray',
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    nonPostImageInput: style({
      display: 'none',
    }),
    selectedPostImage: style({
      display: 'block',
      width: '300px',
      height: '300px',
      objectFit: 'cover',
    }),
    deleteButton: style({
      position: 'absolute',
      top: '10px',
      left: '10px',
    }),
  },

  text: {
    postText: style({
      backgroundColor: 'indigo',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),

    postTextInput: style({
      width: '90%',
      height: '70%',
      margin: '10px 10px',
    }),
  },

  submitButton: style({
    fontSize: '20px',
  }),
};