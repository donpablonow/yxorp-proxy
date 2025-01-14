<?php /* yxorP */

namespace Predis\Collection\Iterator;

use Predis\AClientInterface;
use Predis\NotSupportedException;

/**
 * @property mixed|null $current
 * @property int|mixed $position
 * @property $key
 */
class SortedSetKey extends CursorBasedIterator
{
    protected $key;

    /**
     * @throws NotSupportedException
     */
    public function __construct(AClientInterface $client, $key, $match = null, $count = null)
    {
        $this->requiredCommand($client, 'ZSCAN');

        parent::__construct($client, $match, $count);

        $this->key = $key;
    }

    protected function executeCommand(): array
    {
        return $this->client->zscan($this->key, $this->cursor, $this->getScanOptions());
    }

    protected function extractNext()
    {
        if ($kv = each($this->elements)) {
            $this->position = $kv[0];
            $this->current = $kv[1];

            unset($this->elements[$this->position]);
        }
    }
}
