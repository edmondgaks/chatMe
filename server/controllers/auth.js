const signup = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error});
    }
};
const login = (req,res) => {};


module.exports = {signup,login};