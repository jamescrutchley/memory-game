import '../App.css';
import { Header } from './header';
import { Gameboard } from './gameboard/gameboard';
import { Footer } from './footer';

export function Controller() {

    return (
        <div className="controller">
            <Header />
            <Gameboard />
            <Footer />
        </div>
    )
}

