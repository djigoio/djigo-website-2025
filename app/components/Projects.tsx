import React from 'react';
import Item from './Item';

const Projects: React.FC = () => {
    const createTagPills = (text: string): React.ReactNode => {
        const regex = /\((.*?)\)/g;
        const tags = text.match(regex);
        if (tags) {
            return tags.map((tag) => (
                <span key={tag} className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs mr-2 pill">
                    {tag.slice(1, -1)}
                </span>
            ));
        }
        return text;
    };

    return (
        <div className="text-right default-content pr-6 sm:pr-9" style={{ wordWrap: 'break-word', width: '65%', marginLeft:'auto', marginTop:'auto'}}>
            <h3>Currently:</h3>
            <p><a href="https://directus.io" target="_blank" rel="noopener noreferrer">Directus.io</a> <br />The flexible backend for all of your projects.</p>
            {createTagPills('(CSM)(Rust)(Support)')}
            <h3 className='previously-title'>Previously:</h3>
            <p className='previously'>
                <a href="https://kiwi.com" target="_blank" rel="noopener noreferrer">Kiwi.com</a>
            </p>
            <p className='previously'>
                <a href="https://www.secret-source.eu/" target="_blank" rel="noopener noreferrer">Secret Source</a>
            </p>
        </div>
    );
};

export default Projects;