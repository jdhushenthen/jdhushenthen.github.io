import './Bio.css';

export const Bio = () => {
    return (
        <div className="main">
            <h1 className="headline"> Hey, I'm Janahan - An engineering student at UBC. </h1>

            <p className="line"> Previously, I've worked at... </p>

            <ul className="job-list">
                <li className="line"> <i>BlackBerry QNX</i> - reproducing and debugging customer issues with the QNX Software Development Platform </li>
                <li className="line"> <i>Intel</i> - automating the hardware tests on the FPGA Emulation Platforms </li>
                <li className="line"> <i>Statistics Canada</i> - developing a software package that implements a variant of the CART algorithm </li>
                <li className="line"> <i>CAPREIT</i> - consolidating and cleansing employee data in Active Directory </li>
            </ul>

            <p className="line"> I’m currently looking for full-time opportunities for 2022. </p>

            <div className="email">
                <a className="email-line" href="mailto:jdhushenthen@rogers.com"> jdhushenthen@rogers.com </a>
            </div>
        </div>
    )
}