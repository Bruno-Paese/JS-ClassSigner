import AbstractClassSigner from "./AbstractClassSinger.js";
import NotAbstractClassSigner from "./NotAbstractClassSigner.js";

class ClassSigner {
	CLASS_LIST = {
		'MEXICO': {
			AbstractClassSigner
		}
	};

	SINGLETON_CONTAINER = {};

	getSingleton(className, criteria) {

	}

	get(requestedClass, criteria) {
		if (!this.CLASS_LIST[criteria] || !this.CLASS_LIST[criteria][requestedClass.name] && typeof requestedClass == 'function') {
			return new requestedClass();
		}

		return new this.CLASS_LIST[criteria][requestedClass.name]();
	}
}

export default ClassSigner;