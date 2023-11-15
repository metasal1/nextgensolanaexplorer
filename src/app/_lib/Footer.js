export default function Footer({ params }) {


    return (<>
        © {Date.now()} | {JSON.stringify(params)}
    </>
    )
}