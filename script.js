const users123 = [
    {
        "id": "4d180d88-6894-41de-944d-580423db0049",
        "img": "https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png",
        "name": "Ermolenko",
        "surname": "Mavrikiy",
        "fathername": "Bogdanovich",
        "age": "21",
        "proffesion": "designer"
    },
    {
        "id": "1166bb88-e71d-48d1-918e-ed45fd5e2b07",
        "img": "https://w7.pngwing.com/pngs/858/369/png-transparent-avatar-illustration-male-avatar-material-heroes-hand-happy-birthday-vector-images-thumbnail.png",
        "name": "Shimanovskiy",
        "surname": "Martin",
        "fathername": "Lyubimovich",
        "age": "18",
        "proffesion": "student"
    },
    {
        "id": "b115d246-dd36-4e42-812c-ac41026f39f7",
        "img": "https://w7.pngwing.com/pngs/110/145/png-transparent-computer-icons-father-icon-design-avatar-avatar.png",
        "name": "Esipovich",
        "surname": "Oleg",
        "fathername": "Vlasievich",
        "age": "43",
        "proffesion": "manager"
    },
    {
        "id": "cee28103-2fc5-4286-a500-a4344f86e022",
        "img": "https://w7.pngwing.com/pngs/340/849/png-transparent-child-avatar-girl-woman-computer-icons-child-face-hand-people.png",
        "name": "Golub",
        "surname": "Markell",
        "fathername": "Genrihovich",
        "age": "28",
        "proffesion": "programmer"
    },
    {
        "id": "29e50ab5-7f8b-4089-a3fb-14f44ad7dd30",
        "img": "https://w7.pngwing.com/pngs/800/111/png-transparent-computer-icons-child-avatar-girl-collection-face-hand-people.png",
        "name": "Marchenko",
        "surname": "Frontasiy",
        "fathername": "Filaretovich",
        "age": "11",
        "proffesion": "school"
    }
]

const Person = ({element, deleteUser, editUser}) => {
    return (
        <div key={element.id}>
            <div>{element.name}
            <button onClick={() => editUser(element.id, 'name')}>Edit</button>
            </div>
            <div>{element.surname}
            <button onClick={() => editUser(element.id, 'surname')}>Edit</button>
            </div>
            <div>{element.fathername}
            <button onClick={() => editUser(element.id, 'fathername')}>Edit</button>
            </div>
            <div>{element.age}
            <button onClick={() => editUser(element.id, 'age')}>Edit</button>
            </div>
            <div>{element.proffesion}
            <button onClick={() => editUser(element.id, 'proffesion')}>Edit</button>
            </div>
            <button onClick={() => deleteUser(element.id)}>Delete user</button>
            <br/>
            <br/>
        </div>
    )
}

const App = () => {
    const [users, setUsers] = React.useState(users123)
    const deleteUser = id => {
        const oldUsers = [...users];
        const newList = oldUsers.filter(el => el.id !== id)
        setUsers(
            newList
        )
    }
    const editUser = (id, value) => {
        let editField = prompt('input new ' + value)
        const oldUsers = [...users];
        const newList = oldUsers.filter(el => el.id === id ? el[value] = editField : el)
        setUsers(newList)
    }
    const addedUser = () => {
        const id = prompt('id')
        const name = prompt('name');
        const surname = prompt('surname');
        const fathername = prompt('fathername');
        const age = prompt('age');
        const proffesion = prompt('proffesion');
        
        setUsers([...users, {
            id, name, surname, fathername, age, proffesion
        }])
    }
    
    return (
        <div>
            <div>
                {
                    users.map(el => {
                            return(
                                <Person 
                                key={el.id} 
                                element={el}
                                deleteUser={deleteUser}
                                editUser={editUser}
                                />
                            )
                    })
                }
            </div>
            <button onClick={addedUser}>add person</button>
        </div>
    )
}

ReactDOM.render(<App />, root);
