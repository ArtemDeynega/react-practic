import PaintingsList from './components/PaintingsList';
import Section from './components/Section'; 
import paintings from './paintings.json';

const App = () => {
    return (<div>
        {/*  */}
        <Section title="Топ недели">
            <PaintingsList items={paintings}/>
        </Section>
        <Section />
    </div>)
}
export default App