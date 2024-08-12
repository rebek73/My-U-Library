import mongoose from 'mongoose';

const checkoutSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkoutDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  userFirstName: { type: String, required: true },
  userLastName: { type: String, required: true }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

export default Checkout;
