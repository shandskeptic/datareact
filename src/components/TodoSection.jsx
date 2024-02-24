import PropTypes from 'prop-types';

const InputSection = ({ onInput, value, onAdd }) => {
	return (
		<>
			<h2 className="">What you gonna do today?</h2>
			<input onInput={onInput} value={value} className="m-2 p-2 rounded-md" type="text" placeholder="Enter something..." />
			<button onClick={onAdd} className="bg-primary-400">
				Add
			</button>
		</>
	);
};

InputSection.propTypes = {
	onInput: PropTypes.element.isRequired,
	value: PropTypes.element.isRequired,
	onAdd: PropTypes.element.isRequired,
};

export default InputSection;
