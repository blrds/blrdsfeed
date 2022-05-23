export default {
    title:'Author',
    name: 'author',
    type:'document',
    fields:[
        {
            title:'Name',
            name: 'name',
            type:'string',
            validation: Rule=>Rule.required().error('Name is required')
        },
        {
            title:'Bio',
            name:'bio',
            type:'text'
        },
        {
            title:'Avatar',
            name:'avatar',
            type:'image',
            validation: Rule=>Rule.required().error('Avatar is required')
        }
    ]
}