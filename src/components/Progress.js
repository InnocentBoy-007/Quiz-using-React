import ProgressBar from 'react-bootstrap/ProgressBar';

export function Progress() {
    const now = 90;
    return <ProgressBar now={now} label={`${now}%`} />;
}
