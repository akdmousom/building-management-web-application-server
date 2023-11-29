const announcement = require('../../models/announcements/announcements')

const postAnnouncement = async (req,res)=>{
    const data = req.body
    const newAnnouncement = new announcement(data)
    await newAnnouncement.save().then((result)=>{
        res.status(200).send({message: 'Success'})
    }).catch((err)=>{
        res.status(401).send({message: 'Something Wrong'})
    })
}

module.exports = postAnnouncement