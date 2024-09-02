let feedbackArr = [];
let nextId = 1;

function getAll(){
    return feedbackArr
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating) {
        return false;
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating
    }

    feedbackArr.push(newFeedback)
    return newFeedback
}

function findById(id){
    const idToNumber = Number(id);

    const feedback = feedbackArr.find(item => item.id === idToNumber);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData){
    const feedback = findById(id)
    if (feedback) {
        if (updatedData.sender){
            feedback.sender = updatedData.sender 
        }
        if (updatedData.message){
            feedback.message = updatedData.message 
        }
        if (updatedData.sender){
            feedback.rating = updatedData.rating 
        }
        return feedback;
    }
    return false;
}

function deleteOneById(id){
    const feedback = findById(id)
    if (feedback) {
        const initialLength = feedbackArr.length;
        feedbackArr = feedbackArr.filter(item => item.id !== Number(id));
        return feedbackArr.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false;
}

Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Feedback;
