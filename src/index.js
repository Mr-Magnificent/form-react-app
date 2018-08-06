import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let data = {"title":"Form Title","steps":[{"title":"step title 1","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":true},{"label":"checkbox value 2","value":3,"default_value":true},{"label":"checkbox value 3","value":4,"default_value":true},{"label":"checkbox value 4","value":5,"default_value":false}]},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"},{"name":"textarea_name_3","label":"Textarea label 3","type":"textarea"},{"name":"input_name_4","label":"Input label 4","type":"input","characterstics":{"type":"number","required":true,"min":462,"max":4885}},{"name":"checkbox_name_5","label":"Checkbox label 5","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":false},{"label":"checkbox value 2","value":3,"default_value":true}]}]},{"title":"step title 2","inputs":[{"name":"textarea_name_1","label":"Textarea label 1","type":"textarea"},{"name":"checkbox_name_2","label":"Checkbox label 2","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":false},{"label":"checkbox value 2","value":3,"default_value":false},{"label":"checkbox value 3","value":4,"default_value":false},{"label":"checkbox value 4","value":5,"default_value":false}]},{"name":"radio_name_3","label":"Radio label 3","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":false},{"label":"radio value 2","value":3,"default_value":false},{"label":"radio value 3","value":4,"default_value":true}]}]},{"title":"step title 3","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":false}]},{"name":"input_name_2","label":"Input label 2","type":"input","characterstics":{"type":"number","required":true,"min":465,"max":7951}},{"name":"textarea_name_3","label":"Textarea label 3","type":"textarea"},{"name":"checkbox_name_4","label":"Checkbox label 4","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":true},{"label":"checkbox value 2","value":3,"default_value":true},{"label":"checkbox value 3","value":4,"default_value":true},{"label":"checkbox value 4","value":5,"default_value":false}]},{"name":"radio_name_5","label":"Radio label 5","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":false},{"label":"radio value 2","value":3,"default_value":true}]}]},{"title":"step title 4","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":true},{"label":"checkbox value 1","value":2,"default_value":true}]}]},{"title":"step title 5","inputs":[{"name":"textarea_name_1","label":"Textarea label 1","type":"textarea"},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"},{"name":"textarea_name_3","label":"Textarea label 3","type":"textarea"},{"name":"radio_name_4","label":"Radio label 4","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":true},{"label":"radio value 1","value":2,"default_value":false}]}]},{"title":"step title 6","inputs":[{"name":"checkbox_name_1","label":"Checkbox label 1","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":true},{"label":"checkbox value 2","value":3,"default_value":false}]},{"name":"textarea_name_2","label":"Textarea label 2","type":"textarea"},{"name":"radio_name_3","label":"Radio label 3","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":true},{"label":"radio value 2","value":3,"default_value":false},{"label":"radio value 3","value":4,"default_value":false}]},{"name":"textarea_name_4","label":"Textarea label 4","type":"textarea"},{"name":"checkbox_name_5","label":"Checkbox label 5","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":false}]}]},{"title":"step title 7","inputs":[{"name":"textarea_name_1","label":"Textarea label 1","type":"textarea"}]},{"title":"step title 8","inputs":[{"name":"radio_name_1","label":"Radio label 1","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":true},{"label":"radio value 1","value":2,"default_value":true}]},{"name":"radio_name_2","label":"Radio label 2","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":true},{"label":"radio value 1","value":2,"default_value":false},{"label":"radio value 2","value":3,"default_value":true},{"label":"radio value 3","value":4,"default_value":true}]},{"name":"radio_name_3","label":"Radio label 3","type":"radio","values":[{"label":"radio value 0","value":1,"default_value":false},{"label":"radio value 1","value":2,"default_value":true},{"label":"radio value 2","value":3,"default_value":true}]}]},{"title":"step title 9","inputs":[{"name":"input_name_1","label":"Input label 1","type":"input","characterstics":{"type":"number","required":true,"min":741,"max":6924}},{"name":"input_name_2","label":"Input label 2","type":"input","characterstics":{"type":"number","min":760,"max":3129}},{"name":"checkbox_name_3","label":"Checkbox label 3","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":true},{"label":"checkbox value 2","value":3,"default_value":true},{"label":"checkbox value 3","value":4,"default_value":true}]}]},{"title":"step title 10","inputs":[{"name":"input_name_1","label":"Input label 1","type":"input","characterstics":{"type":"number","required":true,"min":124,"max":3078}},{"name":"input_name_2","label":"Input label 2","type":"input","characterstics":{"type":"number","min":301,"max":3177}},{"name":"checkbox_name_3","label":"Checkbox label 3","type":"checkbox","values":[{"label":"checkbox value 0","value":1,"default_value":false},{"label":"checkbox value 1","value":2,"default_value":false},{"label":"checkbox value 2","value":3,"default_value":false}]}]}]};
ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
