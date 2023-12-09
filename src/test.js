import AbstractClassSigner from "./AbstractClassSinger.js";
import ClassSigner from "./ClassSigner.js"

class test {
	test() {
		console.log('logado')
		console.log((new ClassSigner()).get(AbstractClassSigner, 'MEXICO'));
	}
}

(new test()).test()

export default test;