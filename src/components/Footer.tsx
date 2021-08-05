type MyNameProps = {
    name: string;
    surname: string;
}

const Footer = ({ name, surname }: MyNameProps) => {
    return (
        <p className='text-center text-gray-400'> Copyright © 2021 - {name} {surname} </p>
    )
}
export default Footer;