export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            const { prev, current } = action;
            return {
                ...person, mentors: person.mentors.map( (mentor) => {
                    if (mentor.name === prev) {
                      return { ...mentor, name: current};
                    } 
                    return mentor;
                  }
                )
            };
        }
        case 'added' : {
            const { name, title } = action;
            return {  
                ...person,
                mentors: [...person.mentors, {name, title}]
            };
        }
        case 'deleted' : {
            const { name, title } = action;
            return {
                ...person, 
                mentors: person.mentors.filter((mentor) => mentor.name !== name || mentor.title !== title)
            };
        }
        default: {
            throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
        }
    }
}