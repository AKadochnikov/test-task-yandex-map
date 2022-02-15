import {Map, YMaps} from "react-yandex-maps";
import {INITIAL_MAP_CONFIG} from "../../const";

function YandexMap ():JSX.Element {
    return (
        <YMaps>
            <div>
                <Map defaultState={INITIAL_MAP_CONFIG}/>
            </div>
        </YMaps>
    );
}

export default YandexMap;