type MyNameProps = {
    name: string;
    surname: string;
}

const Header = ({name, surname}: MyNameProps) => {
    return (
        <div className='flex justify-center items-end space-x-2'>
            <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
            <span className='text-gray-400 italic my-2 text-xl'>by {name} {surname} 630610756</span>
        </div>
    )
}

export default Header;

