import { connect } from 'mongoose';

const MONGO_DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/CarShop';

const connectToDatabase = () => connect(MONGO_DB_URL);

export default connectToDatabase;
