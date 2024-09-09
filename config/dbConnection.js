import { connect } from 'mongoose';

const connectDb = async() => {
    try{
        await connect(process.env.Mongo.Uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};
export default connectDb;