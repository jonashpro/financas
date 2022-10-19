const ERRO_PREENCHA_TODOS_OS_CAMPOS = 'preencha todos os campos';
const ERRO_VALORES_INVALIDOS = 'valores inválidos';

window.onload = main;

function criarDadosLocais() {
	if (localStorage.getItem('saldo-total') == null) {
		localStorage.setItem('saldo-total', 0.0);
	}

	if (localStorage.getItem('saldo-livre') == null) {
		localStorage.setItem('saldo-livre', 0.0);
	}

	if (localStorage.getItem('saldo-reservado') == null) {
		localStorage.setItem('saldo-reservado', 0.0);
	}
}

function retornarDinheiroFormatado(dinheiro) {
	return ('R$' + parseFloat(dinheiro).toFixed(2)).replace('.', ',');
}

function converterDinheiroEmFloat(dinheiro) {
	return parseFloat(dinheiro.replace(',', '.'));
}

function main() {
	criarDadosLocais();

	const btnSaldo = document.querySelector('#btn-saldo');
	const dlgSaldo = document.querySelector('#dlg-saldo');
	const btnFecharSaldo = document.querySelector('#btn-fechar-saldo');

	const saldoTotal = document.querySelector('#saldo-total');
	const saldoLivre = document.querySelector('#saldo-livre');
	const saldoReservado = document.querySelector('#saldo-reservado');

	const btnNovoGasto = document.querySelector('#btn-novo-gasto');
	const dlgNovoGasto = document.querySelector('#dlg-novo-gasto');
	const btnCancelarNovoGasto = document.querySelector('#btn-cancelar-novo-gasto');
	const valorNovoGasto = document.querySelector('#valor-novo-gasto');
	const btnConcluirNovoGasto = document.querySelector('#btn-concluir-novo-gasto');
	const erroNovoGasto = document.querySelector('#erro-novo-gasto');

	const btnNovoGanho = document.querySelector('#btn-novo-ganho');
	const dlgNovoGanho = document.querySelector('#dlg-novo-ganho');
	const btnCancelarNovoGanho = document.querySelector('#btn-cancelar-novo-ganho');
	const valorNovoGanho = document.querySelector('#valor-novo-ganho');
	const guardarNovoGanho = document.querySelector('#guardar-novo-ganho');
	const btnConcluirNovoGanho = document.querySelector('#btn-concluir-novo-ganho');
	const erroNovoGanho = document.querySelector('#erro-novo-ganho');

	btnSaldo.onclick = function() {
		saldoTotal.innerHTML = retornarDinheiroFormatado(
			localStorage.getItem('saldo-total')
		);

		saldoLivre.innerHTML = retornarDinheiroFormatado(
			localStorage.getItem('saldo-livre')
		);

		saldoReservado.innerHTML = retornarDinheiroFormatado(
			localStorage.getItem('saldo-reservado')
		);

		dlgSaldo.showModal();
	};

	btnFecharSaldo.onclick = function() {
		dlgSaldo.close();
	};

	btnNovoGasto.onclick = function() {
		dlgNovoGasto.showModal();
	};

	btnCancelarNovoGasto.onclick = function() {
		erroNovoGasto.innerHTML = '';
		valorNovoGasto.value = '';
		dlgNovoGasto.close();
	};	

	btnConcluirNovoGasto.onclick = function() {
		let valor = valorNovoGasto.value;

		if (valor == '') {
			erroNovoGasto.innerHTML = ERRO_PREENCHA_TODOS_OS_CAMPOS;
			return;
		}

		valor = converterDinheiroEmFloat(valor);

		if (isNaN(valor)) {
			erroNovoGasto.innerHTML = ERRO_VALORES_INVALIDOS;
			return;
		}

		console.log(`Valor: ${valor}`);
		btnCancelarNovoGasto.onclick();
	};

	btnNovoGanho.onclick = function() {
		dlgNovoGanho.showModal();
	};

	btnCancelarNovoGanho.onclick = function() {
		erroNovoGanho.innerHTML = '';
		valorNovoGanho.value = '';
		guardarNovoGanho.value = '';
		dlgNovoGanho.close();
	};

	btnConcluirNovoGanho.onclick = function() {
		let valor = valorNovoGanho.value;
		let guardar = guardarNovoGanho.value;

		if ((valor == '') || (guardar == '')) {
			erroNovoGanho.innerHTML = ERRO_PREENCHA_TODOS_OS_CAMPOS;
			return;
		}

		valor = converterDinheiroEmFloat(valor);
		guardar = converterDinheiroEmFloat(guardar);

		if (isNaN(valor) || isNaN(guardar)) {
			erroNovoGanho.innerHTML = ERRO_VALORES_INVALIDOS;
			return;
		}

		console.log(`Valor: ${valor}\nGuardar: ${guardar}`);
		btnCancelarNovoGanho.onclick();
	};
}

