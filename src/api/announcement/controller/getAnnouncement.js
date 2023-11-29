const announcement = require('../../../models/announcements/announcements')

const getAnnouncement = async (req,res)=>{
    
    await announcement.find().then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(401).send({message: 'Something Wrong'})
    })
}

module.exports = getAnnouncement