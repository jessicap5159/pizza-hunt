const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: 'You must have something here!',
            trim: true
        },
        writtenBy: {
            type: String,
            required: 'Please put your name here!'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);
const CommentSchema = new Schema(
    {
      writtenBy: {
        type: String,
        required: 'You must put your name here!'
      },
      commentBody: {
        type: String,
        required: 'There must be something here!'
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      // use ReplySchema to validate data for a reply
      replies: [ReplySchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
  
CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;