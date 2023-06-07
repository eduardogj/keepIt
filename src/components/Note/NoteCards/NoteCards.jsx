export default function NoteCards({ title, cardContent }) {

    return (
        <>
        <div className="column is-4">
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h3 className="title is-5">{title}</h3>
                        <p>{cardContent}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}