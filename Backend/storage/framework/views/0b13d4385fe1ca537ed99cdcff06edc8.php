<?php $__env->startSection('title'); ?>
    Tác giả
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
    <?php echo $__env->make('admin.layouts.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="col-md-9">
        <div class="row mt-2">
            <div class="col-md-12">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                    <h3 class="mt-2">Tác giả (<?php echo e($authors->count()); ?>)</h3>
                    <a href="<?php echo e(route('admin.authors.create')); ?>" class="btn btn-sm btn-primary">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
                <hr>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tên tác giả</th>
                                <th scope="col">Quốc tịch</th>
                                <th scope="col">Năm sinh</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $authors; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $author): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <th scope="row"><?php echo e($key += 1); ?></th>
                                    <td><?php echo e($author->author_name); ?></td>
                                    <td>
                                        <?php echo e($author->nationality); ?>

                                    </td>
                                    <td>
                                        <?php echo e($author->yob); ?>

                                    </td>
                                    <td>
                                        <img src="<?php echo e(asset($author->author_img)); ?>" alt="<?php echo e($author->author_img); ?>" class="img-fluid rounded" width="60" height="60">
                                    </td>

                                    <td>
                                        <a href="<?php echo e(route('admin.authors.edit', $author->author_slug)); ?>" class="btn btn-sm btn-warning">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="#" onclick="deleteItem(<?php echo e($author->author_id); ?>)" class="btn btn-sm btn-danger">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                        <form id="<?php echo e($author->author_id); ?>" action="<?php echo e(route('admin.authors.destroy', $author->author_slug)); ?>" method="post">
                                        <?php echo csrf_field(); ?>
                                        <?php echo method_field('DELETE'); ?>
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\AuroraBookstore\Backend\resources\views\admin\authors\index.blade.php ENDPATH**/ ?>