from challenges.challenge_encrypt_message import encrypt_message
from pytest import raises


def test_encrypt_message():
    result_encrypted_with_odd_number = (
        'rap adartne ed evahc amu moc adafargotpirc_ esarF'
    )
    encrypted_with_odd_number = encrypt_message(
        'Frase criptografada com uma chave de entrada par',
        6,
    )

    result_encrypted_with_pair_number = (
        'irc esarF_rapmi adartne ed evahc amu moc adafargotp'
    )
    encrypted_with_pair_number = encrypt_message(
        'Frase criptografada com uma chave de entrada impar',
        9,
    )

    reversed_phrase = (
        'rapmi adartne ed evahc amu moc adafargotpirc esarF'
    )
    encrypted_with_key_out_of_length = encrypt_message(
        'Frase criptografada com uma chave de entrada impar',
        55,
    )

    assert result_encrypted_with_odd_number == encrypted_with_odd_number
    assert result_encrypted_with_pair_number == encrypted_with_pair_number
    assert reversed_phrase == encrypted_with_key_out_of_length

    with raises(TypeError):
        encrypt_message()
    with raises(TypeError):
        encrypt_message(False, 5)
    with raises(TypeError):
        encrypt_message('Frase que pode ser criptografada', '17')
    with raises(TypeError):
        encrypt_message(key=5)
    with raises(TypeError):
        encrypt_message(message='Frase que pode ser criptografada')
