import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import timestamp from './plugins/timestamp';

const PlayerSchema = new Schema({
  firstName: {
    type: String,
    minlength: 3,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    minlength: 3,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: (value) => {
      return validator.isMobilePhone(value);
    },
  },
  team: {
    type: String,
    required: [true, 'Team is required'],
  },
  isCoach: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    required: [true, 'Speed is required'],
    min: 0,
    max: 100,
  },
  strength: {
    type: Number,
    required: [true, 'Strength is required'],
    min: 0,
    max: 100,
  },
  ability: {
    type: Number,
    required: [true, 'Strength is required'],
    min: 0,
    max: 100,
  },
  techniques: {
    type: Number,
    required: [true, 'Strength is required'],
    min: 0,
    max: 100,
  },
  tactical: {
    type: Number,
    required: [true, 'Strength is required'],
    min: 0,
    max: 100,
  },
});

PlayerSchema.plugin(timestamp);

const Player = mongoose.model('Player', PlayerSchema);

export default Player;
