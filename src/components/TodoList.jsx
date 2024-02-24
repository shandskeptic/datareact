import PropTypes from 'prop-types';

const ListTodo = ({ task, hDelete }) => {
	return (
		<>
			<h4 className="mt-4">List of your tasks: </h4>
			{task.length === 0 ? (
				<p>Empty... Write something.</p>
			) : (
				<ul>
					{task.map((item, index) => {
						return (
							<div key={index} className=" bg-primary-800 rounded-md w-[40vw] m-2">
								<li className="flex justify-between items-center">
									<div className="flex items-center gap-2">
										<span className="bg-primary-400 left-0 h-full  flex items-center p-2 rounded-l-md gap-4">{index + 1}</span>
										<p className=" text-start">{item}</p>
									</div>
									<button onClick={() => hDelete(index)} className=" bg-primary-400 right-0 h-full flex items-center p-2 rounded-none rounded-r-md">
										Delete
									</button>
								</li>
							</div>
						);
					})}
				</ul>
			)}
		</>
	);
};

ListTodo.propTypes = {
	task: PropTypes.element.isRequired,
	hDelete: PropTypes.element.isRequired,
};

export default ListTodo;
